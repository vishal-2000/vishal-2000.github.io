---
layout: archive
title: "Research"
permalink: /publications/
author_profile: false
---

{% assign pubs_by_date = site.publications | sort: 'date' | reverse %}

<div class="cc-pubs">
{% for post in pubs_by_date %}
  <article class="cc-pub">
    <div class="cc-pub__meta">
      {{ post.date | date: "%Y" }}<span class="cc-pub__dot">·</span>{{ post.venue }}{% if post.category == "manuscripts" %}<span class="cc-pub__dot">·</span><span class="cc-pub__review">Under Review</span>{% endif %}
    </div>
    <h2 class="cc-pub__title">
      <a href="{{ post.permalink | default: post.url }}">{{ post.title }}</a>
    </h2>
    {% if post.excerpt %}<p class="cc-pub__excerpt">{{ post.excerpt }}</p>{% endif %}
    <div class="cc-pub__links">
      {% if post.paperurl and post.paperurl != "" %}<a href="{{ post.paperurl }}" target="_blank" rel="noopener">Paper</a>{% endif %}
      {% if post.projecturl and post.projecturl != "" %}<a href="{{ post.projecturl }}" target="_blank" rel="noopener">Project</a>{% endif %}
      {% if post.codeurl and post.codeurl != "" %}<a href="{{ post.codeurl }}" target="_blank" rel="noopener">Code</a>{% endif %}
      {% if post.videourl and post.videourl != "" %}<a href="{{ post.videourl }}" target="_blank" rel="noopener">Video</a>{% endif %}
    </div>
  </article>
{% endfor %}
</div>
