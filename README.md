# OMINIX
    A mini-framework to express generic server.

## GET STARTING
    Use npx to run and create your project.

## Example
    command: 
        npx ominix create <name> 
                    or 
        npx ominix create -p <name>
    
    result:
        - path_dir
            - <name>
                - src
                    - controllers
                        - ServerController
                            index.ts
                    - views
                        index.html
                - index.ts
                - package.json
                - package-lock.json
                - yarn-lock

    if you use: npx ominix create, your package is named with 'my-project'.