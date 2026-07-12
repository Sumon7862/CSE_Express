import PDFCard from "../cards/PDFCard";

const LatestPDFs = () => {

  const latestPDFs = [
    {
      id: 1,
      semester: 1,
      subject: "Structured Programming",
      exam: "Final Examination",
      year: "2024",
      pages: 18,
      premium: true,
    },
    {
      id: 2,
      semester: 2,
      subject: "Discrete Mathematics",
      exam: "Mid Examination",
      year: "2023",
      pages: 12,
      premium: false,
    },
    {
      id: 3,
      semester: 3,
      subject: "Data Structure",
      exam: "Final Examination",
      year: "2024",
      pages: 22,
      premium: true,
    },
    {
      id: 4,
      semester: 5,
      subject: "Database Management System",
      exam: "Final Examination",
      year: "2022",
      pages: 20,
      premium: true,
    },
  ];

  return (
    <section className="py-24">

      <div className="container">

        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">

          <div>

            <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Latest Uploads
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Recently Added PDFs
            </h2>

            <p className="mt-4 text-slate-500 max-w-2xl">
              Browse our latest uploaded question papers and AI-assisted
              solution PDFs.
            </p>

          </div>

        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-4">

          {latestPDFs.map((pdf) => (
            <PDFCard
              key={pdf.id}
              pdf={pdf}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default LatestPDFs;