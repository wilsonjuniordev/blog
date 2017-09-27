---
layout: page
title: Tags
permalink: /tags/index.html
description: "Procure os assuntos pelas tags."
---

<ul class="tag-links">
  {% for tag in site.tags %}
    <li>
      <a href="#{{ tag[0] | slugify }}" class="tag-link">
        #{{ tag | first }}&nbsp;<span class="badge">{{ tag | last | size}}</span>
      </a>
    </li>
  {% endfor %}
</ul>

<hr>

<ul class="posts">
  {% for tag in site.tags %}
    <h2 id="{{ tag[0] | slugify }}">#{{ tag[0] }}</h2>

    {% for post in tag[1] %}
      <li>
        <h3>
          <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          <p class="post-date"><span><i class="fa fa-calendar" aria-hidden="true"></i> {% include date.html date=post.date %} - <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}</span></p>
        </h3>
      </li>
    {% endfor %}
  {% endfor %}
</ul>