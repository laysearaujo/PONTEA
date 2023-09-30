<template>
  <div class="profile">
    <img
      :src="
        user.photo_path
          ? user.photo_path
          : 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
      "
      alt="Imagem"
      class="rounded-image"
    />

    <div class="name flex">
      <h2 class="title">{{ user.name }}</h2>
      <a href="#" class="icon-button">
        <img src="/../icons/edit.svg" alt="Edit Profile" />
      </a>
    </div>

    <div class="rating flex">
      <div class="stars">
        <span>4,1</span>
        <img src="/../icons/star.svg" alt="Star" />
      </div>

      <span>552 avaliações</span>
    </div>

    <div class="wallet flex">
      <img src="/../icons/wallet.svg" alt="Edit Profile" />
      <p>R$ {{ user.credit }}</p>
    </div>

    <div class="description">
      <p>
        Professora na Universidade Federal de Pernambuco, pós-graduada em
        educação inclusiva para crianças neuroatípicas pela UNINASSAU e
        licenciada em Pedagogia pela Universidade do Minho.
      </p>
    </div>
    <q-btn
      class="q-px-xl q-py-sm rounded"
      label="Ser educador"
      color="primary"
      v-if="showBtn"
    />
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  props: {
    showBtn: Boolean,
    user: {
      id: Number,
      name: String,
      email: String,
      email_verified_at: Date,
      photo_path: String,
      profession: String,
      is_teacher: Boolean,
      rating: Number,
      wallet: Number,
      created_at: Date,
      updated_at: Date,
    },
  },
  components: {},
  data() {
    return {
      showHistory: true,
      title: "Minha carteira",
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: auto !important;
}

p,
h2 {
  margin: 0;
  line-height: auto !important;
}

.profile {
  max-width: 320px;
  padding: 40px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  gap: 16px;

  height: 100%;
}

.flex {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rounded {
  border-radius: 20px;
  position: fixed;
  bottom: 100px;
}

.rounded-image {
  border-radius: 100%;
  width: 104px;
  height: 104px;
}

.title {
  color: #3c3c3f;
  font-size: 16px;
  font-weight: 500;
  line-height: 0 !important;
  font-family: Lexend;
}

.icon-button {
  width: 16px;
  height: 16px;
}

.rating {
  font-size: 12.8px;
  font-family: Lexend;
  font-weight: 300;
}

.stars span {
  margin-right: 3px;
}

.scrollable-div {
  max-height: calc(100vh - 410px);
  overflow-y: scroll;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.scrollable-div::-webkit-scrollbar {
  width: 8px;
}

.scrollable-div::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.scrollable-div::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.scrollable-div::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 6px;
}

.wallet {
  background-color: #dce9f5;
  padding: 4px 8px;
  border-radius: 4px;
}

.wallet p {
  font-family: Lexend;
  color: #144ec0;
  font-weight: 500;
  font-size: 12.8px;
}

.description {
  font-family: Lexend;
  font-weight: 300;
}
</style>
