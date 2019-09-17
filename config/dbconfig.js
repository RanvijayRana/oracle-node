module.export = {
    user: process.env.NODE_ORACLEDB_USER || "SYSTEM",
    password: process.env.NODE_ORACLEDB_PASSWORD || "Infy123+",
    connectString: process.env.NODE_EECS_CONNECTIONSTRING,
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true :false
}