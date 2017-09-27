---
layout: page
title: Arquivos
permalink: /archive/index.html
description: "Arquivos de cada postagem"
---

<ul class="posts">
  {% for post in site.posts %}

    {% unless post.next %}
      <h2>{{ post.date | date: '%Y' }}</h2>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h2>{{ post.date | date: '%Y' }}</h2>
      {% endif %}
    {% endunless %}

    <li>
      <h3>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
        <p class="post-date">
          <span>
            <i class="fa fa-calendar" aria-hidden="true"></i> {% include date.html date=post.date %}
            - <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}
          </span>
        </p>
      </h3>
    </li>

  {% endfor %}
</ul>
