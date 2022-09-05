module.exports = function(server, db){

    server.get('/data/:table', (req, res)=>{ // but limit which tables to query with ACL
    let query = "SELECT * FROM " + req.params.table
    let result = db.prepare(query).all()
    setResultHeaders(res, result)
    res.json(result)
    })

    server.get('/data/:table/:id', (req, res)=>{ // but limit which tables to query with ACL
    let query = "SELECT * FROM " + req.params.table + " WHERE id = @id"
    let result = db.prepare(query).all(req.params)
    setResultHeaders(res, result[0])
    res.json(result[0])
    })

}