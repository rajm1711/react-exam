
// Data Table

function Home() {

   

    return (
        <div>
            {/* Table */}
            <div className="table-wrapper boxshadow pt-2">
                <section className="tableFixHead">
                    <table className="table" striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Product Name</th>
                                <th>Categories</th>
                                <th>Company</th>
                                <th>Prices</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                       
                    </table>
                </section>
            </div>
        </div>
    )
}

export default Home;