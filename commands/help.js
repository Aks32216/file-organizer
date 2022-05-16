function help(){
    console.log(`
        The commands available are:
            --> runner help 
            --> runner tree
            --> runner organize
        
        1. help -> helps to see all the available command


        2. tree -> prints the tree structure of the path
            options -> runner tree path
                        -> prints the tree view of the path passed
                    -> runner tree
                        -> prints the tree structure of current working directory
        

        3. organize -> organizes the content of file in some meaningful way
            options -> runner organize path
                        -> organizes the content of the given path
                    -> runner organize
                        -> organizes the content of current path
    `);
}

module.exports={
    help:help
}