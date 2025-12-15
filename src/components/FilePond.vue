<script setup>
import { ref, defineProps, defineExpose, defineModel } from 'vue'
import vueFilePond from 'vue-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

const FilePond = vueFilePond(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
)
const props = defineProps({
    acceptedTypes: {
        type: Array,
        default: () => ['image/*']
    },
    labelIdle: {
        type: String,
        default: () => 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    },
    previewImageUrl: String,
    error: String,
    multiple: {
        type: Boolean,
        default: () => false
    }
})

const model = defineModel();
const filePondRef = ref(null);

const handleUpdateFiles = (files) => {
    if (props.multiple) {
        model.value = files.length ? files.map(f => f.file) : []
    } else {
        model.value = files.length ? files[0].file : null
    }
}

defineExpose({
    resetFiles: () => filePondRef.value.removeFiles()
});
</script>

<template>
    <div class="w-100">
        <div>
            <FilePond name="filepond" ref="filePondRef" v-model="model" :accepted-file-types="acceptedTypes"
                :label-idle="labelIdle" :allow-multiple="multiple" @updatefiles="handleUpdateFiles" />

            <small class="text-danger" v-if="error">{{ error }}</small>
        </div>

        <div v-if="previewImageUrl" class="mt-2 preview-box">
            <img :src="previewImageUrl" alt="" class="img-thumbnail img-fill " width="300">
        </div>
    </div>
</template>