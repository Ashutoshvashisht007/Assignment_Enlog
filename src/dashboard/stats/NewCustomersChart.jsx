
// const NewCustomersChart = () => {
//   const chartData = [
//     { day: 'Mon', value: 3 },
//     { day: 'Tue', value: 8 },
//     { day: 'Wed', value: 10 },
//     { day: 'Thu', value: 9 },
//     { day: 'Fri', value: 4 },
//   ];

//   const maxValue = Math.max(...chartData.map(d => d.value));

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <h3 className="text-sm font-medium text-gray-500 mb-4">New customers</h3>
//       <div className="flex items-end space-x-2 h-24 mb-2">
//         {chartData.map((item, index) => (
//           <div key={index} className="flex-1 flex flex-col items-center">
//             <div
//               className="w-full bg-gray-900 rounded-t"
//               style={{ height: `${(item.value / maxValue) * 100}%` }}
//             />
//             <span className="text-xs text-gray-500 mt-1">{item.day}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewCustomersChart;

const data = [
  { label: 'Mon', value: 7 },
  { label: 'Tue', value: 10 },
  { label: 'Wed', value: 7 },
  { label: 'Thu', value: 2 },
  { label: 'Fri', value: 10 }
];

const NewCustomersChart = () => (
  <div>
    <h2 className="text-sm font-medium text-gray-800 mb-2">New customers</h2>
    <div className="flex items-end space-x-4 h-32">
      {data.map((day) => (
        <div key={day.label} className="flex flex-col items-center">
          <div
            style={{ height: `${day.value * 10}px` }}
            className="w-6 bg-gray-900 rounded-t"
          />
          <span className="mt-2 text-xs text-gray-500">{day.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default NewCustomersChart;
