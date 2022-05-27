<script>
    export let user;
    const save = () => {
      console.log("Save");
    }
    const cancel = () => {
      console.log("Cancel");
    }
</script>
<div class="user">
    <h1 class="title">{#if user.id != null} EDIT {:else} ADD NEW {/if}</h1>
    <div class="flex"><label for="">First name:</label> <input type="text" bind:value={user.firstName}></div>
    <div class="flex"><label for="">Last name:</label> <input type="text" bind:value={user.lastName}></div>
    <div class="flex"><label for="">Age:</label> <input type="text" bind:value={user.age}></div>
    <div class="flex"><label for="">Sex:</label> <input type="text"  bind:value={user.sex}></div>
    <div class="flex"> <label for="">Address:</label> <input type="text"  bind:value={user.address}></div>
    <div class="flex">
        <button on:click={save} class="btn-save">Save</button>
        <button on:click={cancel} class="btn-cancel">Cancel</button>
    </div>
</div>
<style>
    .title{
        font-weight: bold;
    }
    .flex{
        display: flex;
    }
    label{
        width: 100px;
    }
    input{
        width: 300px;
    }
    button{
        color: #fff;
        padding: 10px;
        border: none;
    }
    .btn-save{
        background: #208dec;
        margin-right: 5px;
    }
    .btn-cancel{
        background: #ff5a5f;
    }
</style>
