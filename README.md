# Install Qt Creator

This action allows you to install the Qt Creator development packages.

[![GitHub Super-Linter](https://github.com/qt-creator/install-dev-package/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/qt-creator/install-dev-package/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/qt-creator/install-dev-package/actions/workflows/check-dist.yml/badge.svg)](https://github.com/qt-creator/install-dev-package/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/qt-creator/install-dev-package/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/qt-creator/install-dev-package/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

## Example

```yaml
steps:
  - id: qtc-extract
    uses: qt-creator/install-dev-packages@v2.2
    with:
      version: 17.0.0
```

## Outputs

You can get the path to the extracted files via the outputs:

```yaml
steps:
  - name: Print outputs
    run: |
      echo "Path: ${{ steps.qtc-extract.outputs.path }}"
      echo "Path, always with /: ${{ steps.qtc-extract.outputs.path-with-slashes }}"
```
