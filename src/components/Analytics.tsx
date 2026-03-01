import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface PriceHistoryEntry {
    date: string;
    prices: {
        ungraded?: number;
        grade7?: number;
        grade8?: number;
        grade9?: number;
        grade95?: number;
        bgs95?: number;
        psa10?: number;
    };
}

interface AnalyticsProps {
    priceHistory?: PriceHistoryEntry[];
}

export const Analytics = ({ priceHistory = [] }: AnalyticsProps) => {

    useLayoutEffect(() => {
        const root = am5.Root.new("chartdiv");

        if (root._logo) {
            root._logo.set("forceHidden", true);
            root._logo.dispose();
        }
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            paddingLeft: 0,
            paddingRight: 20
        }));

        // Build chart data from real priceHistory
        const chartData: { date: number; ungraded: number; psa10: number; grade9: number; bgs95: number }[] = [];

        if (priceHistory.length > 0) {
            for (const entry of priceHistory) {
                const dateTs = new Date(entry.date).getTime();
                chartData.push({
                    date: dateTs,
                    ungraded: entry.prices?.ungraded || 0,
                    psa10: entry.prices?.psa10 || 0,
                    grade9: entry.prices?.grade9 || 0,
                    bgs95: entry.prices?.bgs95 || entry.prices?.grade95 || 0,
                });
            }
        }

        // Date-based X axis
        const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            baseInterval: { timeUnit: "day", count: 1 },
            renderer: am5xy.AxisRendererX.new(root, {
                minGridDistance: 60,
            }),
            tooltip: am5.Tooltip.new(root, {})
        }));

        xAxis.get("renderer").grid.template.setAll({
            strokeOpacity: 0.1,
            strokeDasharray: [3]
        });
        xAxis.get("renderer").labels.template.setAll({
            fill: am5.color(0x94A3B8),
            fontSize: 11
        });

        const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 }),
            numberFormat: "'$'#,###.##"
        }));
        yAxis.get("renderer").labels.template.setAll({
            fill: am5.color(0x94A3B8),
            fontSize: 11
        });
        yAxis.get("renderer").grid.template.setAll({
            strokeOpacity: 0.1,
            strokeDasharray: [3]
        });

        // Series factory
        function createSeries(name: string, field: string, color: number) {
            const series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                name,
                xAxis,
                yAxis,
                valueYField: field,
                valueXField: "date",
                stroke: am5.color(color),
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{name}: ${valueY}"
                })
            }));

            series.strokes.template.setAll({
                strokeWidth: 2,
                shadowBlur: 20,
                shadowColor: am5.color(color),
                shadowOpacity: 0.5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            });

            series.bullets.push(() => {
                return am5.Bullet.new(root, {
                    sprite: am5.Circle.new(root, {
                        radius: 3,
                        fill: am5.color(color),
                        stroke: root.interfaceColors.get("background"),
                        strokeWidth: 1,
                    })
                });
            });

            series.data.setAll(chartData);
        }

        if (chartData.length > 0) {
            createSeries("Ungraded", "ungraded", 0x3B82F6);
            createSeries("PSA 10", "psa10", 0xEF4444);
            createSeries("Grade 9", "grade9", 0x22C55E);
            createSeries("BGS 9.5", "bgs95", 0xF59E0B);
        }

        // Legend
        const legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root.horizontalLayout,
        }));
        legend.labels.template.setAll({ fill: am5.color(0x94A3B8), fontSize: 12 });
        legend.data.setAll(chart.series.values);

        // Cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none",
            xAxis: xAxis,
        }));

        return () => root.dispose();
    }, [priceHistory]);

    const hasData = priceHistory && priceHistory.length > 0;

    return (
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#101828]">Price History</h3>
            </div>
            {!hasData && (
                <div className="flex items-center justify-center h-64 text-gray-400">
                    No price history available for this card.
                </div>
            )}
            <div className={hasData ? 'h-75' : 'h-0'} id="chartdiv"></div>
        </div>
    );
};