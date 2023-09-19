import { LineChart, Line } from 'recharts';

const Data = () => {
    const mathMarksData = [
        { studentName: "Student 1", mathScore: 85 },
        { studentName: "Student 2", mathScore: 78 },
        { studentName: "Student 3", mathScore: 92 },
        { studentName: "Student 4", mathScore: 88 },
        { studentName: "Student 5", mathScore: 95 },
        { studentName: "Student 6", mathScore: 72 },
        { studentName: "Student 7", mathScore: 89 },
        { studentName: "Student 8", mathScore: 83 },
        { studentName: "Student 9", mathScore: 91 },
        { studentName: "Student 10", mathScore: 77 },
      ];
    return (
        <div>
            <LineChart height={400} width={500} data={mathMarksData}>
                <Line dataKey={'mathScore'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default Data;