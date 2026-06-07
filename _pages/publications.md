---
layout: archive
title: "Research"
permalink: /publications/
author_profile: false
---

{% include base_path %}
{% assign pubs_by_date = site.publications | sort: 'date' | reverse %}

<div class="cc-pubs">
{% for post in pubs_by_date %}
  <article class="cc-pub">
    {% if post.teaser and post.teaser != "" %}
      {% assign teaser_path = '/images/research/' | append: post.teaser | prepend: base_path %}
      {% if post.teaser contains '.mp4' %}
        <video class="cc-pub__media" autoplay loop muted playsinline preload="metadata"
               {% if post.teaser_poster %}poster="{{ '/images/research/' | append: post.teaser_poster | prepend: base_path }}"{% endif %}>
          <source src="{{ teaser_path }}" type="video/mp4" />
        </video>
      {% else %}
        <img class="cc-pub__media" src="{{ teaser_path }}" alt="{{ post.title }}" loading="lazy" />
      {% endif %}
    {% endif %}
    <div class="cc-pub__body">
      <div class="cc-pub__meta">
        {{ post.date | date: "%Y" }}<span class="cc-pub__dot">·</span>{{ post.venue }}{% if post.category == "manuscripts" %}<span class="cc-pub__dot">·</span><span class="cc-pub__review">Under Review</span>{% endif %}
      </div>
      <h2 class="cc-pub__title">
        <a href="{{ post.permalink | default: post.url }}">{{ post.title }}</a>
      </h2>
      <div class="cc-pub__links">
        {% if post.paperurl and post.paperurl != "" %}<a href="{{ post.paperurl }}" target="_blank" rel="noopener">Paper</a>{% endif %}
        {% if post.projecturl and post.projecturl != "" %}<a href="{{ post.projecturl }}" target="_blank" rel="noopener">Project</a>{% endif %}
        {% if post.codeurl and post.codeurl != "" %}<a href="{{ post.codeurl }}" target="_blank" rel="noopener">Code</a>{% endif %}
        {% if post.videourl and post.videourl != "" %}<a href="{{ post.videourl }}" target="_blank" rel="noopener">Video</a>{% endif %}
        {% if post.news1url and post.news1url != "" %}<a href="{{ post.news1url }}" target="_blank" rel="noopener">News</a>{% endif %}
        {% if post.news2url and post.news2url != "" %}<a href="{{ post.news2url }}" target="_blank" rel="noopener">Press</a>{% endif %}
      </div>
    </div>
  </article>
{% endfor %}
</div>
