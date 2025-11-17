'use client'

export default function MajorContractsSection() {
  const contracts = [
    {
      ref: '440005457',
      projectDate: 'February 1, 2018',
      client: 'Alfanar',
      projectName: 'CONSTRUCTION OF NEW MILITARY CITY – 2 (MC-2) 132 / 13.8KV SUBSTATION, ABHA (Substation civil work, road and asphalt work, electrical work)',
      contractStart: 'February 5, 2018',
      contractEnd: 'March 10, 2018',
    },
    {
      ref: '440005907',
      projectDate: 'March 17, 2018',
      client: 'Al Sharif Group and KEC Co. (ASKEC)',
      projectName: 'Connection of Bareq 132/33kV/S/S in Tihama network (Stringing Work)',
      contractStart: 'March 20, 2018',
      contractEnd: 'November 20, 2018',
    },
    {
      ref: '440003981',
      projectDate: 'April 29, 2018',
      client: 'National Contracting Co. (NCC)',
      projectName: 'Integration of Shuqaiq-2 Power Plant 380kV OHTL (Safety services)',
      contractStart: 'April 29, 2018',
      contractEnd: 'December 6, 2018',
    },
    {
      ref: '—',
      projectDate: 'June 10, 2018',
      client: 'Saudi Service for Electromechanic Works (SSEM)',
      projectName: 'Joints for 33kV Power Cable (Aramco Site, Jazan)',
      contractStart: 'June 21, 2018',
      contractEnd: 'July 15, 2018',
    },
    {
      ref: 'KC-3840-07',
      projectDate: 'September 15, 2018',
      client: 'Al Kefah Contracting Company',
      projectName: 'Telecommunication, Fiber Optics (Aramco Site, Jazan)',
      contractStart: 'September 30, 2018',
      contractEnd: 'September 20, 2019',
    },
    {
      ref: '6600033163',
      projectDate: 'October 28, 2018',
      client: 'SEPCO 2',
      projectName: 'JIGCC Power Block Project (Package 4) (Towers & Gantry Installation and Stringing)',
      contractStart: 'April 3, 2018',
      contractEnd: 'April 28, 2019',
    },
    {
      ref: '440005372',
      projectDate: 'January 14, 2019',
      client: 'Al Sharif Group and KEC Co. (ASKEC)',
      projectName: 'Construction of 380kV Double Circuit OHTL from Jizan Refinery / P-P to Baish Wast 380kV BSP (Tower Erection)',
      contractStart: 'January 14, 2019',
      contractEnd: 'August 11, 2019',
    },
    {
      ref: '440005527',
      projectDate: 'September 27, 2020',
      client: 'National Contracting Co. (NCC)',
      projectName: 'Construction of 380kV OHTL from JEC/IRP/S to Abha East 380KV BSP (Stringing Work, Spacering, Clipping for Conductor and OPGW Clipping)',
      contractStart: 'September 27, 2020',
      contractEnd: 'July 1, 2022',
    },
    {
      ref: '440005907',
      projectDate: 'December 27, 2021',
      client: 'Al Sharif Group and KEC Co. (ASKEC)',
      projectName: 'Connection of Bareq 132/33kV/S/S in Tihama Network (OPGW Rectification & Sagging Work)',
      contractStart: 'December 27, 2021',
      contractEnd: 'August 5, 2022',
    },
    {
      ref: '4400172889',
      projectDate: 'March 10, 2024',
      client: 'Alfanar',
      projectName: 'Expansion of Sudair PV380 KV BSP 9036 (Contract #4400017289)',
      contractStart: 'March 10, 2024',
      contractEnd: 'Oct 15, 2024',
    },
    {
      ref: '4400013968',
      projectDate: 'October 24, 2024',
      client: 'Alfanar',
      projectName: 'Expansion of Yanbu Central, Umluj North and Madinah 380 KV BSPs (Contract #4400013968)',
      contractStart: 'October 24, 2024',
      contractEnd: 'February 28, 2025',
    },
  ]

  return (
    <section id="major-contracts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            List of Major Contracts
          </h2>
          <div className="h-1 w-24 bg-black mx-auto mb-12" />
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            A comprehensive list of our major projects and contracts showcasing
            our expertise and successful partnerships.
          </p>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    PROJECT REF#
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    PROJECT DATE
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    CLIENT
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    PROJECT NAME
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    CONTRACT DATE (START – END)
                  </th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-black">
                      {contract.ref}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {contract.projectDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {contract.client}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {contract.projectName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {contract.contractStart} – {contract.contractEnd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden space-y-6">
            {contracts.map((contract, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-black"
              >
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-600 uppercase">
                      Project Ref#
                    </span>
                    <p className="text-lg font-bold text-black">{contract.ref}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-600 uppercase">
                      Project Date
                    </span>
                    <p className="text-gray-700">{contract.projectDate}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-600 uppercase">
                      Client
                    </span>
                    <p className="text-gray-700 font-semibold">{contract.client}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-600 uppercase">
                      Project Name
                    </span>
                    <p className="text-gray-700">{contract.projectName}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-600 uppercase">
                      Contract Dates
                    </span>
                    <p className="text-gray-700">
                      {contract.contractStart} – {contract.contractEnd}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

