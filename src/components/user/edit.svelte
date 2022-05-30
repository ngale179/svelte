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
    <div class="flex"><label for="">Sex:</label>
        <select name="sex" id="">
            {#if user.sex == 1}
                <option value="1" selected>Male</option>
            {:else}
                <option value="0" selected>Female</option>
            {/if}
        </select>
    </div>
    <div class="flex"> <label for="">Address:</label> <input type="text"  bind:value={user.address}></div>
    <div class="flex">
        <button on:click={save} class="btn-save">Save</button>
        <button on:click={cancel} class="btn-cancel">Cancel</button>
    </div>
</div>
