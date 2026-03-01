interface GradePrice {
    ungraded?: number;
    grade7?: number;
    grade8?: number;
    grade9?: number;
    grade95?: number;
    bgs95?: number;
    psa10?: number;
}

interface DetailsGradeProps {
    currentPrice?: GradePrice;
}

const gradeConfig = [
    { key: 'ungraded', title: 'Ungraded' },
    { key: 'grade9', title: 'Grade 9' },
    { key: 'psa10', title: 'PSA 10' },
    { key: 'grade8', title: 'Grade 8' },
    { key: 'grade7', title: 'Grade 7' },
    { key: 'bgs95', title: 'BGS 9.5' },
];

export default function DetailsGrade({ currentPrice }: DetailsGradeProps) {

    const grades = gradeConfig.map((g, idx) => ({
        title: g.title,
        id: idx + 1,
        amount: (currentPrice as Record<string, number | undefined>)?.[g.key] || 0,
    }));

    return (
        <div className="sm:max-w-294 px-2 mx-auto py-10">
            <h2 className="text-xl font-semibold text-[#101828] mb-6">Graded Prices</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                {grades.map((item) => {
                    const hasPrice = item.amount > 0;
                    return (
                        <div
                            key={item.id}
                            className="border-2 rounded-xl p-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-[#E2E8F0] hover:border-[#2563EB]"
                        >
                            <h1 className="text-[#64748B] font-semibold text-xs sm:text-sm">
                                {item.title}
                            </h1>
                            <div className="flex justify-between items-center mt-2">
                                <h1 className={`font-semibold text-lg sm:text-xl ${hasPrice ? '' : 'text-gray-300'}`}>
                                    ${item.amount.toFixed(2)}
                                </h1>
                            </div>
                            {!hasPrice && (
                                <p className="text-[#94A3B8] font-medium text-[11px] sm:text-xs mt-1">
                                    No data
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
