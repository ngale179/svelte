<script>
    export let blog;
    const save = () => {
      console.log("Save");
    }
    const cancel = () => {
      console.log("Cancel");
    }
</script>
<div class="blog">
    <h1 class="title">{#if blog.id != null} EDIT {:else} ADD NEW {/if}</h1>
    <div class="flex"><label for="">Title:</label> <input type="text" bind:value={blog.title}></div>
    <div class="flex"><label for="">Description:</label> <input type="text" bind:value={blog.description}></div>
    <div class="flex"><label for="">Content:</label> <input type="text" bind:value={blog.content}></div>
    <div class="flex">
        <button on:click={save} class="btn-save">Save</button>
        <button on:click={cancel} class="btn-cancel">Cancel</button>
    </div>
</div>
