# RiriSharpTheme
This is the theme I created for my own blog, available to use and customize however you want.

## Features
- Responsive
- Dark & light theme
- Minimalistic design
- Usage of Bootstrap
- Minimal usage of javascript (frameworks)
- About page with usage of [Gravatar](https://gravatar.com/)
- Posts with cover images with fallback
- Post with banner images with double fallback
- Images, equations and internal-links with captions and reference possibilities
- Multi author support
- Code highlighting using [highlight.js](https://github.com/highlightjs/highlight.js/)

## Installation
Installation is fairly straightforward:
```bash
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/RichardPoes/RiriSharpTheme themes/RiriSharpTheme
echo "theme = 'RiriSharpTheme'" >> hugo.toml
hugo server
```

Add the following lines to you `hugo.toml` file:

```toml
ignoreFiles = ["themes/RiRiSharpTheme/content/"]

[taxonomies]
	tag = "tags"
	author = "authors"
```

## Configuration
Configuration should be rather simple and straightforward.

## Referencing & Captioning
The goal is to have captioning and "clever referencing" on all types of inserted content. 
Right now that is: regular links, images, equations and code blocks.
Currently referencing is missing for: quotes and tables.
This section will explain how it works for each type.
I have tried to make it consistent, but given that there is already a lot of markdown syntax in place, this is not always possible.

### Linking
You can both link to internal, as well as external sites.
Both will be handled differently (optionally).
Let us first consider the two different kind of links:
```
[Duck Duck Go](https://duckduckgo.com).
[Post 2](/posts/post-2).
```

The template will automatically see whether it is an internal or an external link.
It will style the link text and decorate it with the correct icon accordingly.

### Images
All images will automatically be captioned.
For instance, when we write this:
```markdown
![Bryce Canyon National Park](bryce-canyon.jpg)
```
An image will be created with the caption "**Image** `<imageNumber>`: Bryce Canyon National Park", the same as its alt-text.
The number `<imageNumber>` is decided upon automatically and will correspond to the position within a post.

We can then reference this image by doing either of these things:
```
{{< cref-img bryce-canyon.jpg >}}
{{< cref-img bryce-canyon.jpg "this image" >}}
```
The first option will reference to this image by "image `<imageNumber>`", where `<imageNumber>` will be the correct image number.
The latter option will override this with the text provided.
Of course, both references are clickable.

### Equations
Let us create an equation:
```
{{< equation "eq:pi" "Some caption" >}}
4\sum_{k=0}^\infty \frac{(-1)^k}{2k+1} = \pi
{{< /equation >}}
```

The addition of a caption is optional.
Again, automatic numbering will be applied.

We can then reference this equation by doing either of these things.
```
{{< cref-eq "eq:pi">}}. 
{{< cref-eq "eq:pi" "the other equation" >}}
```
The first option will reference to this equation by "equation `<equationNumber>`", where `<equationNumber>` will be the correct equaiton number.
The latter option will override this with the text provided.
Of course, both references are clickable.

### Code blocks
We can write a code block like this:

~~~
```json {caption="An example of a json file" id="code:ex-json"}
{
  "key": "value",
  "dictKey": {
      "key1": "Yeah",
      "key2": "Nope",
  },
  "SomeArray": [
      "True",
      1,
      false
  ]    
}
```
~~~
As you can see, one needs to add more than only the language identifier.
These caption and id tags speak for themselves.

You can now reference to this code block by typing either
```
{{< cref-code "code:ex-json" >}}
{{< cref-code "code:ex-json" "this code block" >}}
```
The first option will reference to this image by "code block `<codeBlockNumber>`", where `<codeBlockNumber>` will be the correct code block number.
The latter option will override this with the text provided.
Of course, both reference are clickable.

### Global configuration
The global configuration can be found in [hugo.toml](hugo.toml).
All things should be straightforward, as I have not changed much in comparison with the Ananke template.
Do let me know if you run into any problems, or have any questions. 

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

### Multi author support
By adding a `authors = ["Name of author"]` in your post configuration, an image with link will be created to the author page.
At `<baseUrl>/authors/` you can find a list of all the authors, accompanied with a small summary.
Clicking trough on the author will give you a detailed page of the author, along with a list of posts written by them.

## Attributions
- The font [Quicksand](https://www.dafont.com/quicksand.font) by [Andrew Paglinawan](https://www.dafont.com/andrew-paglinawan.d3799) has been used. 
The license has to be included during redistribution and can be found [here](/static/fonts/Quicksand/License.txt).
- The [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) theme has been used as a starting point.
- The website Moonbooth because of its helpful [article](https://moonbooth.com/hugo/authors/) on adding multiple authors