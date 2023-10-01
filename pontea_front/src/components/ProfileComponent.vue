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

    <div class="flex-name">
      <h2 class="name">{{ user.name }}</h2>
      <router-link to="/perfilCliente" class="icon-button" v-if="showEditBtn">
        <img src="/spa/icons/edit.svg" alt="Edit Profile" />
      </router-link>
    </div>

    <div class="rating flex">
      <div class="stars">
        <span> {{ user.note != null ? user.note : 0 }}</span>
        <img src="/spa/icons/star.svg" alt="Star" />
      </div>

      <span>552 avaliações</span>
    </div>

    <div class="wallet flex" v-if="user.credit != null">
      <img src="/spa/icons/wallet.svg" alt="Edit Profile" />
      <p>R$ {{ user.credit != null ? user.credit : 0 }}</p>
    </div>

    <div class="description">
      <p>
        {{
          user.description
            ? user.description
            : "Este usuário ainda não possui uma descrição. Gostaríamos de saber mais sobre eles, mas por enquanto, sua personalidade é um mistério! 🌟"
        }}
      </p>
    </div>

    <router-link
      to="/ser-educador"
      class="q-px-xl q-py-sm rounded educator-button"
      v-if="showBtn && !user.is_teacher"
    >
      Ser educador
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  props: {
    showBtn: Boolean,
    showEditBtn: Boolean,
    user: {
      id: Number,
      name: String,
      email: String,
      email_verified_at: Date,
      note: Number,
      credi: Number,
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

.flex-name {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
}

.name {
  text-align: center;
  color: #3c3c3f;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px !important;
  font-family: Lexend;
}

.educator-button {
  border-radius: 20px;
  background: #144ec0;
  color: #fbfdff;
  font-family: Lexend;
  font-weight: 500;
  padding: 8px 40px;
  text-decoration: none;
}
</style>
