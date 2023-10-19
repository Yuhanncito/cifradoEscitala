<script setup>
import { defineProps, ref } from 'vue';
import {Transposicion, DescifradoTransposicion} from '../assets/Encrypt.js';

const { msg } = defineProps({
  msg: String,
});

const mensaje = ref('');
const llave = 3
const Encriptado = ref('');
const mensajeEncriptado = ref('');
const menDescifrado = ref('');

const encryptTrans = () => {
  mensajeEncriptado.value = Transposicion(mensaje.value, llave);
};

const DesEncrypt = () => {
  menDescifrado.value = DescifradoTransposicion(Encriptado.value, llave);
};
</script>

<template>
  <div class="container card">
    <div class="card-content">
      <h1 class="title">{{ msg }}</h1>
      <section class="section">
        <div class="field">
          <label class="label">Encriptar:</label>
          <div class="control">
            <input class="input" type="text" id="mensaje" v-model="mensaje" />
          </div>
        </div>
        <button class="button is-primary" @click="encryptTrans">Cifrar</button>
        <div class="field">
          <p class="subtitle">Mensaje Cifrado: {{ mensajeEncriptado }}</p>
        </div>
      </section>
      <section class="section">
        <div class="field">
          <label class="label">Desencriptar:</label>
          <div class="control">
            <input class="input" type text id="Encriptado" v-model="Encriptado" />
          </div>
        </div>
        <button class="button is-primary" @click="DesEncrypt">Descifrar</button>
        <div class="field">
          <p class="subtitle">Mensaje Descifrado: {{ menDescifrado }}</p>
        </div>
      </section>
    </div>
  </div>
</template>
