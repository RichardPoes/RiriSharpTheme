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
The global configuration can be found in [theme.toml](theme.toml).
Most things are rather straightforward.
The section
```toml
[author]
name = "John Doe"
email = "john.doe@example.com"
```
will make sure the author name and their gravatar is being shown on the about page.

### Post configuration
This is how you structure your files if you want a post with a cover image.
```bash
cd content/posts
mkdir a-new-post
cd a-new-post
touch index.md
touch cover.svg
```
Let us now elaborate on this a bit further.

To have a custom post cover image, create a folder inside the folder [content/posts](content/posts/).
Apart from an `index.md` file, which will be your post, we want to add a cover image. 
All image formats which are supported by the HTML `<img>` tag, are supported.
More info about what types are supported can be found on [the mdn web docs page](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types), for example.
The most important thing is that you name your file `cover.[ext]`, where `[ext]` is the file extension of your choosing. 


## Attributions
- The font [Quicksand](https://www.dafont.com/quicksand.font) by [Andrew Paglinawan](https://www.dafont.com/andrew-paglinawan.d3799) has been used. 
The license has to be included during redistribution and can be found [here](/static/fonts/Quicksand/License.txt).
- The [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) theme has been used as a starting point.