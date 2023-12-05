const TableLayout = ({ id, header = [], children, refTable }) => {
    return (
        <>
            <table id={id} ref={refTable} className='w-full table-auto rounded-xl border-separate'>
                <thead className='rounded-t-md bg-gray-2 dark:bg-meta-4'>
                    <tr>
                        {header.map((h) => 
                            <th key={h} scope="col" className="px-4 py-3 text-white">
                                {h}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </>
    )
}

export default TableLayout