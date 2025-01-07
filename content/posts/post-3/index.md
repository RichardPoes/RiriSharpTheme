+++
title = 'Having a post with an image'
date = 2023-03-15T11:00:00-07:00
draft = false
tags = ['red','green','blue']
authors = ['John Doe', 'Hank the Tank']
+++

Occaecat aliqua consequat laborum ut ex aute aliqua culpa quis irure esse magna dolore quis.
Proident fugiat labore eu laboris officia Lorem enim.
Ipsum occaecat cillum ut tempor id sint aliqua incididunt nisi incididunt reprehenderit.
Voluptate ad minim sint est aute aliquip esse occaecat tempor officia qui sunt.
Aute ex ipsum id ut in est velit est laborum incididunt.
Aliqua qui id do esse sunt eiusmod id deserunt eu nostrud aute sit ipsum.
Deserunt esse cillum Lorem non magna adipisicing mollit amet consequat.

![Bryce Canyon National Park](bryce-canyon.jpg)
Sit excepteur do velit veniam mollit in nostrud laboris incididunt ea.
Amet eu cillum ut reprehenderit culpa aliquip labore laborum amet sit sit duis.
Laborum id proident nostrud dolore laborum reprehenderit quis mollit nulla amet veniam officia id id.
Aliquip in deserunt qui magna duis qui pariatur officia sunt deserunt.

{{< equation "eq:pi" >}}
4\sum_{k=0}^\infty \frac{(-1)^k}{2k+1} = \pi
{{< /equation >}}

Donec imperdiet commodo velit.
Curabitur posuere urna orci, sit amet tempor quam dictum fermentum.
Morbi dictum orci ut vestibulum tristique.
Cras pulvinar lectus ac ante vestibulum mollis.
Etiam ac metus eu felis placerat rhoncus.
Curabitur eu sem rutrum, pulvinar nibh sit amet, efficitur erat.
Fusce vel pretium felis.

{{< equation "eq:gauss" "The Gaussian integral" >}}
\int_{-\infty}^{\infty}\mathrm{e}^{-x^2}\mathrm{d}x = \sqrt{2\pi}
{{< /equation >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus condimentum viverra purus, in vehicula lorem condimentum in.
In quis odio a mauris varius interdum.
Cras tincidunt lectus eu dui pharetra viverra.
Nullam mauris felis, dictum quis elementum non, blandit quis sapien.
Cras ultricies nunc eget quam sodales, at accumsan dui rhoncus.
Vestibulum at turpis interdum, malesuada dui a, rutrum ante.
Morbi nulla quam, venenatis id aliquet sed, facilisis ut urna.
Cras pretium, ipsum vel rhoncus eleifend, dui neque dapibus orci, nec vulputate ante eros vitae magna.
Donec eget justo quis sapien tincidunt sollicitudin.
Aliquam iaculis, sapien sed bibendum accumsan, quam erat condimentum lorem, in ultricies ex urna eget mi.

{{< table caption="An example of a table" id="tab:ex-tab">}}
| Column 1      | Column 2      |
| ------------- | ------------- |
| Cell 1, Row 1 | Cell 2, Row 1 |
| Cell 1, Row 2 | Cell 1, Row 2 |
{{< /table >}}

Donec imperdiet commodo velit.
Curabitur posuere urna orci, sit amet tempor quam dictum fermentum.
Morbi dictum orci ut vestibulum tristique.
Cras pulvinar lectus ac ante vestibulum mollis.
Etiam ac metus eu felis placerat rhoncus.
Curabitur eu sem rutrum, pulvinar nibh sit amet, efficitur erat.
Fusce vel pretium felis.

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

We can now reference to {{< cref-img bryce-canyon.jpg "this image" >}} by giving it our own name, or we simply refer to it as {{< cref-img bryce-canyon.jpg >}}.
Moreover, we saw a definition for \(\pi\) in {{< cref-eq "eq:pi">}}. 
In {{< cref-eq "eq:pi" "the other equation" >}} we saw \(\pi\) come up again.
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
Link to [Post 2](/posts/post-2).
{{< rawhtml >}}
 <i class="ri ri-x-outline"></i>&nbsp;<i class="ri ri-ririsharp-outline"></i>
 {{< /rawhtml >}}
 are in raw html.
 Keyboard strokes: {{< kbd >}}Ctrl{{< /kbd >}}, {{< kbd >}}Alt{{< /kbd >}}, {{< kbd >}}Del{{< /kbd >}}.
 Curabitur eu sem rutrum, pulvinar nibh sit amet, efficitur erat.
Fusce vel pretium felis.
Some `fields =>` need separate hightlighting.
Code block can be seen in {{< cref-code id="code:ex-json" >}}, or we can reference to it by calling it our {{< cref-code caption="our special code block" id="code:ex-json">}}.
Tables can also be references, by using {{< cref-tab id="tab:ex-tab" >}}, or again, by calling it {{< cref-tab caption="with a custom string" id="tab:ex-tab" >}}.