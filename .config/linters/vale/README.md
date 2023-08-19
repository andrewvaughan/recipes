# Vale

Vale is a prose linter.

## Updating configuration

Developers can add or modify Vale styles via the `.vale.ini` configuration file. If changed, run the following to update
the project linting:

```bash
brew install vale
rm -rf .config/linters/vale/styles/*
vale sync
```
