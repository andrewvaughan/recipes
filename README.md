# Vaughan family recipes

[![MegaLinter][badge-megalinter]][badge-megalinter-target] [![License][badge-license]](LICENSE)

This repository contains various recipes used by the Vaughan extended family. Please feel free to provide feedback.

## Contributing

Family members and friends are welcome to submit their recipes to this collection. Fork the recipe and don't forget to
run `git lfs install` to properly download and upload images.

Prior to creating a Pull Request, please run the following commands:

1. `make pretty` to apply formatting standards to all Markdown files
2. `make test` to ensure that the documentation passes integration tests

Any errors that occur on these steps should be self-explanatory.

The common issue pertains to uncommon words that aren't in the spelling dictionary. To support these, please add any new
words to the [.config/dictionaries/project.txt](.config/dictionaries/project.txt) file.

The second issue you may run into is a line-length restriction, especially for long tables. An example of how to bypass
this is available in this [README.md](README.md) file in the `LICENSE` section, below.

Please reach out to Andrew with any other questions.

## License

![CC BY-NC-SA 4.0][img-cc-by-nc-sa]

All recipes are available as part of a [Creative Commons Attribution NonCommercial ShareAlike 4.0][cc-by-nc-sa] license.

<!-- editorconfig-checker-disable -->

|           License           | Description                                                                                                                                                                                                                         |
| :-------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  ![Attribution][img-cc-by]  | **Attribution** - You must give appropriate credit, provide a link to the license, and indicate any to the project. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. |
| ![NonCommercial][img-cc-nc] | **NonCommercial** - You may not use the material for commercial purposes.                                                                                                                                                           |
|  ![ShareAlike][img-cc-sa]   | **ShareAlike** - If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.                                                                                |

<!-- editorconfig-checker-enable -->

For more information, please see the complete license available in the [LICENSE](LICENSE) file.

<!-- Link References -->

[badge-license]: https://img.shields.io/badge/License-CC_BY--NC--SA-blue
[badge-megalinter]: https://github.com/andrewvaughan/recipes/workflows/MegaLinter/badge.svg?branch=main
[badge-megalinter-target]: https://github.com/andrewvaughan/recipes/actions?query=workflow%3AMegaLinter+branch%3Amain
[cc-by-nc-sa]: https://creativecommons.org/licenses/by-nc-sa/4.0/
[img-cc-by-nc-sa]: .github/img/license-cc-by-nc-sa.png
[img-cc-by]: .github/img/license-cc-by.png
[img-cc-nc]: .github/img/license-cc-nc.png
[img-cc-sa]: .github/img/license-cc-sa.png
