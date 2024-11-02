# RiriSharpTheme
This is my remodeling of the [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) theme.
I have tried to leave as much functionality the same, while offering a unique styling.

## Features
- Responsive
- Both dark & light theme
- Minimalistic design
- Usage of Bootstrap
- Minimal usage of javascript (frameworks)
- About page with usage of [Gravatar](https://gravatar.com/)
- Posts with cover images and fallback

## Installation
Installation is simple and just like Ananke:
```bash
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/RichardPoes/RiriSharpTheme themes/RiriSharpTheme
echo "theme = 'RiriSharpTheme'" >> hugo.toml
hugo server
```

## Configuration
Configuration should be rather simple and straightforward.

### Global configuration
The global configuration can be found in (hugo.toml)[./hugo.toml].
Most things are rather straightforward.
The section
```toml
[author]
name = "John Doe"
email = "john.doe@example.com"
```
will make sure the author name and their gravatar is being shown on the about page.

### Post configuration
As of right now posts do not have any special kind of configuration keys.

## Attributions
- The font [Quicksand](https://www.dafont.com/quicksand.font) by [Andrew Paglinawan](https://www.dafont.com/andrew-paglinawan.d3799) has been used. 
The license has to be included during redistribution and can be found [here](/static/fonts/Quicksand/License.txt).
- The [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) theme has been used as a starting point.