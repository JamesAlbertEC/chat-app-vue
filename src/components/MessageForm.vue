<template>
    <div class="message-form ld-over">
        <small class="text-muted">
            @{{ user.name }}
        </small>
        <b-form @submit.prevent="onSubmit" class="ld-over"
        v-bind:class="{ running: sending }">
            <div class="ld ld-ring ld-spin"></div>
            <b-alert variant="danger" :show="hasError">
                {{ error }}
            </b-alert>
            <b-form-group>
                <b-form-input id="message-input" type="text"
                v-model="message" placeholder="Enter Message"
                autocomplete="off" required></b-form-input>
            </b-form-group>
            <div class="clearfix">
                <b-button type="submit" variant="primary" class="float-right">
                    send
                </b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'message-form',
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapState([
      'user',
      'sending',
      'error',
      'activeRoom',
    ]),
    ...mapGetters([
      'hasError',
    ]),
  },
};
</script>
