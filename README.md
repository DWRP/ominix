# OMINIX

    A mini-framework to express generic server.

## GET STARTING

    Use npx to run and create your project.

## Commands

    npx ominix                          |
    npx ominix create                   |   Create projet
    npx ominix create <name>            |   with name or
    npx ominix create -p <name>         |   default: my_project
    npx ominix create --project <name>  |

    npx ominix create -c <name>             |   Create new controller
    npx ominix create --controller <name>   |   withou default name

## CAUTION

    1 - NOT USE npx ominix create without controller if you has create your project
    2 - For use npx create -c and --controller, stay in folder of your project that the framework ominix make

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
