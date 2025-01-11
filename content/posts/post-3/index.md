+++
title = 'Post showcasing all features'
date = 2023-03-15T11:00:00-07:00
draft = false
tags = ['red','green','blue']
authors = ['John Doe', 'Hank the Tank']
summary = 'This post shows everything that is possible with this template. All code is shown and its effect on the template are shown.'
+++

This post is a demonstration post.
It is sort of self documenting, in that it will showcase all features that were build in.

# Preamble
The preamble of this post looks like 
```toml {caption="Preamble of this post"}
+++
title = 'Post showcasing all features'
date = 2023-03-15T11:00:00-07:00
draft = false
tags = ['red','green','blue']
authors = ['John Doe', 'Hank the Tank']
+++
```
This is mostly like default Hugo, however the `authors` tag as been added.
One can observe that in the `/content/authors` folder there are two subfolders, one for each author.
The `_index.md` files which are contained in those folders contain all the data describing the author.
An image of the author will be looked up using [Gravatar](https://gravatar.com/).

# Code
Inline code can be written by typing `` `inline =>` ``, as is well known in Markdown.
What is nice (in our opinion) is that this template supports ligatures, so that is why you didn't see `= >`.

Code blocks can simply be added by enclosing the code in backticks ` ``` `, as is common in almost all markdown flavors.
In this template you can however add a caption and an id for referencing the created code block.
Let's look at an example.
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
This will render to:
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
Now we can either reference it without customizing the reference text by typing `{{</* cref-code id="code:ex-json" */>}}`, which would render to {{< cref-code id="code:ex-json" >}}.
Or we can reference to it by calling it our `{{</* cref-code caption="overridden code block reference" id="code:ex-json"*/>}}`, which would render to {{< cref-code caption="overridden code block reference" id="code:ex-json">}}.

# Images
Support for images is also native to Markdown, so we can simply do this by calling `![Bryce Canyon National Park](bryce-canyon.jpg)`.
This would render to
![Bryce Canyon National Park](bryce-canyon.jpg)

Observe that the caption is the text added in the square brackets.
The `alt`-tag will also be this caption.
As we could with code, we can reference this image in two ways.
We can either reference it without customizing the reference text by typing `{{</* cref-img src="bryce-canyon.jpg" */>}}` which would render to {{< cref-img src="bryce-canyon.jpg" >}}.
Or we can reference to it by calling it our `{{</* cref-img caption="this image" src="bryce-canyon.jpg" */>}}`, which would render to {{< cref-img caption="this image" src="bryce-canyon.jpg" >}}.

## Banner and cover images
As you can see, when you clicked on this post, it had a preview image, which we call a cover image.
When you are finally on the post, there is a banner image too.
To add a cover image, simply add `cover.*` to your post folder, where `*` denotes that it can be any file extension.
If no cover image is supplied, a fallback image will be used, located at `static/images/fallback.svg`.

To add a banner image, simply add `banner.*` to your post folder where, again, `*` denotes that it can be any file extension.
If no banner image is supplied, the cover image will be used as a fallback.
If that is also not present, no banner image will be shown.

# Tables
Also support for tables is native in markdown.
However, to be able to cross-reference created tables, an extra shortcode had to be created.
We can render the code below
```
{{</* table caption="An example of a table" id="tab:ex-tab">}}
| Column 1      | Column 2      |
| ------------- | ------------- |
| Cell 1, Row 1 | Cell 2, Row 1 |
| Cell 1, Row 2 | Cell 1, Row 2 |
{{< /table */>}}
```
to the table
{{< table caption="An example of a table" id="tab:ex-tab">}}
| Column 1      | Column 2      |
| ------------- | ------------- |
| Cell 1, Row 1 | Cell 2, Row 1 |
| Cell 1, Row 2 | Cell 1, Row 2 |
{{< /table >}}

Now we can either reference it without customizing the reference text by typing `{{</* cref-tab id="tab:ex-tab" */>}}`, which would render to {{< cref-tab id="tab:ex-tab" >}}.
Or we can reference to it by calling it our `{{</* cref-tab caption="overridden code block reference" id="tab:ex-tab"*/>}}`, which would render to {{< cref-tab caption="example of a table reference" id="tab:ex-tab">}}.

{{< table caption="Another example of a table" id="tab:ex-tab2">}}
| Column 1      | Column 2      |
| ------------- | ------------- |
| Cell 1, Row 1 | Cell 2, Row 1 |
| Cell 1, Row 2 | Cell 1, Row 2 |
{{< /table >}}

# Equations
Although not strictly part of the core markdown functionality, many markdown engines support math mode.
Most of the time this is done by typing either `$ f(x) $`, `$$ f(x) $$`, `\( f(x) \)` or `\[ f(x) \]`.
We only support the latter two of the four, which would render into the inline math \(f(x)\) or 
\[f(x)\]
respectively.
For centered equations there is a custom shortcode, where
```
{{</* equation caption="The Gaussian integral" id="eq:gauss" >}}
\int_{-\infty}^{\infty}\mathrm{e}^{-x^2}\mathrm{d}x = \sqrt{2\pi}
{{< /equation */>}}
```
would render to
{{< equation caption="The Gaussian integral" id="eq:gauss" >}}
\int_{-\infty}^{\infty}\mathrm{e}^{-x^2}\mathrm{d}x = \sqrt{2\pi}
{{< /equation >}}

Now we can either reference it without customizing the reference text by typing `{{</* cref-eq id="eq:gauss" */>}}`, which would render to {{< cref-eq id="eq:gauss" >}}.
Or we can reference to it by calling it our `{{</* cref-tab caption="overridden equation reference" id="eq:gauss"*/>}}`, which would render to {{< cref-eq caption="overridden equation reference" id="eq:gauss">}}.

# Links
Although links are nothing too fancy in this Hugo template, the template is able to discern between internal and external links.
The links `[Duck Duck Go](https://duckduckgo.com)` and `[Post 2](/posts/post-2)` will be rendered as 
[Duck Duck Go](https://duckduckgo.com) and [Post 2](/posts/post-2).
Neat huh!

# Raw HTML
Although HUGO has a setting to support raw HTML, we thought it was best to support it merely by using a shortcode.
The following code
```
{{</* rawhtml >}}
 <i class="ri ri-x-outline"></i>&nbsp;<i class="ri ri-ririsharp-outline"></i>
 {{< /rawhtml */>}}
```
renders to {{< rawhtml >}}<i class="ri ri-x-outline"></i>&nbsp;<i class="ri ri-ririsharp-outline"></i>{{< /rawhtml >}}. So you can never accidentally insert HTML.

# Keyboard strokes
This template has support for keyboard strokes.
Simply type `{{</* kbd >}}Ctrl{{< /kbd */>}}, {{</* kbd >}}Alt{{< /kbd */>}}, {{</* kbd >}}Del{{< /kbd */>}}` and it will get rendered to {{< kbd >}}Ctrl{{< /kbd >}}, {{< kbd >}}Alt{{< /kbd >}}, {{< kbd >}}Del{{< /kbd >}}.
