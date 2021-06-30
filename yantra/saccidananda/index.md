---
title: Саччидананда
tags: yantra
date: 2021-09-26
cover: /img/sat.svg
sans: सत् चित् आनन्द
trans: sat cit ānanda
yantras:
  - name: sat
    sans: सत्
    trans: sat
    title: Сат
    text: Всепроникающее вечное бытие
  - name: cit
    sans: चित्
    trans: cit
    title: Чит
    text: Чистое сознание Вселенной
  - name: ananda
    sans: आनन्द
    trans: ānanda
    title: Ананда
    text: Блаженство самопознания Вселенной
---

<sat-yantras v-for="yantra in $frontmatter.yantras" :key="yantra.name" :name="yantra.name" :info="yantra" />
