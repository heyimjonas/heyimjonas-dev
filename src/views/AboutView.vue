<script setup>
import { ref } from 'vue'
import games from '../data/games.js'

const photoUrl = import.meta.env.BASE_URL + 'photo.jpg'
const photoOk = ref(true)
</script>

<template>
  <section class="about">
    <div class="top">
      <div class="txt">
        <div class="k mono">// about_me</div>
        <h1>Hi, I'm Jonas Santiago</h1>
        <div class="role mono">Odoo Developer</div>
        <p>
          I build custom Odoo modules and automate the repetitive parts of business workflows. I
          like turning messy processes into clean, reliable software, and I enjoy sharing what I
          learn by mentoring teammates and new developers.
        </p>
      </div>
      <img v-if="photoOk" class="photo" :src="photoUrl" alt="Portrait of Jonas" @error="photoOk = false" />
      <div v-else class="photo placeholder mono">[ portrait ]</div>
    </div>

    <blockquote class="motto">
      <span class="mark" aria-hidden="true">&ldquo;</span>amat victoria curam<span
        class="mark"
        aria-hidden="true"
        >&rdquo;</span
      >
      <footer class="meaning">
        <span class="tr mono">Victory loves preparation.</span>
        <span class="take"
          >Because a good project starts with well defined problems and requirements to
          solve.</span
        >
      </footer>
    </blockquote>

    <div class="play">
      <div class="k mono">// off_the_clock</div>
      <p class="lead">When I'm not coding, I play:</p>
      <ul class="games">
        <li v-for="g in games" :key="g.name" class="game">
          <img v-if="g.logo" class="glogo" :src="g.logo" :alt="g.name + ' logo'" />
          <span v-else class="glogo glyph mono" aria-hidden="true">{{ g.glyph }}</span>
          <div class="ginfo">
            <span class="gname">{{ g.name }}</span>
            <span class="gnote mono">{{ g.note }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.top {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 56px;
}
.k {
  color: var(--blue);
  font-size: 13px;
}
h1 {
  margin: 4px 0;
  font-size: 34px;
  line-height: 1.15;
}
.role {
  color: var(--teal);
  margin-bottom: 12px;
}
.txt p {
  margin: 0;
  line-height: 1.7;
  font-size: 17px;
  max-width: 480px;
}
.photo {
  --h: clamp(170px, 34vh, 290px);
  height: var(--h);
  width: calc(var(--h) * 0.8);
  object-fit: cover;
  border-radius: 14px;
  border: 2px solid var(--border);
}
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--panel);
  color: var(--muted);
  font-size: 13px;
}

.motto {
  margin: 0;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: clamp(30px, 6vh, 56px);
  line-height: 1.2;
  letter-spacing: 0.5px;
  color: var(--text);
}
.meaning {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
  font-family: var(--sans);
  font-style: normal;
  letter-spacing: 0;
}
.tr {
  color: var(--teal);
  font-size: 18px;
}
.take {
  color: var(--muted);
  font-size: 18px;
  line-height: 1.4;
}
.motto .mark {
  color: var(--blue);
  font-size: 1.4em;
  line-height: 0;
  vertical-align: -0.2em;
  margin: 0 0.04em;
}

.play {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 20px 18px;
}
.lead {
  margin: 4px 0 12px;
  color: var(--muted);
}
.games {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.game {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 16px 10px 10px;
}
img.glogo {
  background: #f3f3f3;
  border-radius: 6px;
  padding: 3px 5px;
}
.glogo {
  width: 88px;
  height: 56px;
  object-fit: contain;
  flex-shrink: 0;
}
.glyph {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--orange);
  background: var(--panel);
  border-radius: 6px;
}
.ginfo {
  display: flex;
  flex-direction: column;
}
.gname {
  font-weight: 600;
}
.gnote {
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .about {
    gap: 14px;
  }
  .motto {
    font-size: 22px;
  }
  .meaning {
    margin-top: 4px;
  }
  .tr {
    font-size: 14px;
  }
  .take {
    font-size: 14px;
  }
  .top {
    grid-template-columns: 1fr auto;
    gap: 14px;
  }
  h1 {
    font-size: 22px;
  }
  .role {
    margin-bottom: 6px;
    font-size: 13px;
  }
  .txt p {
    font-size: 13.5px;
    line-height: 1.5;
  }
  .photo {
    --h: 130px;
  }
  .play {
    padding: 12px 14px;
  }
  .lead {
    margin: 2px 0 8px;
    font-size: 14px;
  }
  .games {
    gap: 8px;
  }
  .game {
    gap: 8px;
    padding: 6px 10px 6px 6px;
  }
  .glogo {
    width: 52px;
    height: 36px;
  }
  .gnote {
    display: none;
  }
  .gname {
    font-size: 13px;
  }
}
@media (max-height: 560px) and (min-width: 641px) {
  .txt p {
    font-size: 14px;
    line-height: 1.5;
  }
  .play {
    display: none;
  }
}
</style>
