---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---

<span class="section-label">PUBLICATIONS</span>

{% assign pubs_by_date = site.publications | sort: 'date' | reverse %}

{% for post in pubs_by_date %}
  <div class="archive__item">
    {% if post.category == "manuscripts" %}
      <span class="pub-status pub-status--review">Under Review</span>
    {% elsif post.category == "conferences" %}
      <span class="pub-status pub-status--conference">{{ post.venue | truncatewords: 6, "" }}</span>
    {% endif %}

    <h2 class="archive__item-title">
      <a href="{{ post.permalink | default: post.url }}">{{ post.title }}</a>
    </h2>

    <p class="archive__item-excerpt">{{ post.excerpt }}</p>

    <p style="font-size:0.82em; opacity:0.75; margin-bottom:0.5em;">
      {{ post.venue }}{% if post.date %} &middot; {{ post.date | date: "%Y" }}{% endif %}
    </p>

    <div style="display:flex; flex-wrap:wrap; gap:0.5em;">
      {% if post.paperurl and post.paperurl != "" %}
        <a href="{{ post.paperurl }}" target="_blank" rel="noopener" class="sport-tag" style="text-decoration:none;">📄 Paper</a>
      {% endif %}
      {% if post.projecturl and post.projecturl != "" %}
        <a href="{{ post.projecturl }}" target="_blank" rel="noopener" class="sport-tag" style="text-decoration:none;">🌐 Project</a>
      {% endif %}
      {% if post.codeurl and post.codeurl != "" %}
        <a href="{{ post.codeurl }}" target="_blank" rel="noopener" class="sport-tag" style="text-decoration:none;">💻 Code</a>
      {% endif %}
      {% if post.videourl and post.videourl != "" %}
        <a href="{{ post.videourl }}" target="_blank" rel="noopener" class="sport-tag" style="text-decoration:none;">🎬 Video</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
