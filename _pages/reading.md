---
permalink: /reading/
title: "Reading"
author_profile: false
cc_minimal: true
---

{% include base_path %}

<span class="section-label">Currently reading</span>

<div class="cc-shelf">
{% for book in site.data.books.currently %}
  <figure class="cc-shelf__book">
    {% if book.cover and book.cover != "" %}
      <img class="cc-shelf__cover" src="{{ '/images/books/' | append: book.cover | append: '.jpg' | prepend: base_path }}" alt="{{ book.title }}" loading="lazy" />
    {% else %}
      <span class="cc-shelf__cover cc-shelf__cover--text"><span>{{ book.title }}</span></span>
    {% endif %}
    <figcaption>
      <span class="cc-shelf__title">{{ book.title }}</span>
      <span class="cc-shelf__author">{{ book.author }}</span>
    </figcaption>
  </figure>
{% endfor %}
</div>

<span class="section-label">Read</span>

<div class="cc-shelf">
{% for book in site.data.books.read %}
  <figure class="cc-shelf__book">
    {% if book.cover and book.cover != "" %}
      <img class="cc-shelf__cover" src="{{ '/images/books/' | append: book.cover | append: '.jpg' | prepend: base_path }}" alt="{{ book.title }}" loading="lazy" />
    {% else %}
      <span class="cc-shelf__cover cc-shelf__cover--text"><span>{{ book.title }}</span></span>
    {% endif %}
    <figcaption>
      <span class="cc-shelf__title">{{ book.title }}</span>
      <span class="cc-shelf__author">{{ book.author }}</span>
    </figcaption>
  </figure>
{% endfor %}
</div>
