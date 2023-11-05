module.exports = {
    "env": {
        "browser" : true,
        "es2021"  : true,
        "node"    : true
    },
    "extends"       : ["eslint:recommended"],
    "parserOptions" : {
        "ecmaVersion": "latest"
    },
    "rules": {
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "key-spacing": ["error", {
            "align": {
                "afterColon"  : true,
                "beforeColon" : true,
                "on"          : "colon"
            }
        }],
        "no-console"           : "warn",
        "no-debugger"          : "error",
        "no-dupe-keys"         : "error",
        "no-duplicate-imports" : "error",
        "no-empty"             : "error",
        "no-trailing-spaces"   : "error",
        "no-unused-vars"       : "warn",
        "no-var"               : "error",
        "object-curly-newline" : ["error", {
            "ExportDeclaration" : { "consistent": true, "minProperties": 3 },
            "ImportDeclaration" : { "consistent": true, "minProperties": 3 },
            "ObjectExpression"  : { "consistent": true, "minProperties": 3 },
            "ObjectPattern"     : { "consistent": true, "minProperties": 3 }
        }],
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals" : true,
                "avoidEscape"           : true
            }
        ],
        "semi"           : ["error", "always"],
        "eqeqeq"         : ["error", "smart"],
        "no-else-return" : "error"
    }
};