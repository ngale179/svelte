<script>
    import Modal,{getModal} from '../modal.svelte';
    import EditBlog from './edit.svelte';

    let listData = [
      {id: 1, title: "Title blog 1", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 2, title: "Title blog 2", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 3, title: "Title blog 3", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 4, title: "Title blog 4", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 5, title: "Title blog 5", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 6, title: "Title blog 6", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 7, title: "Title blog 7", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 8, title: "Title blog 8", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 9, title: "Title blog 9", description: "description", content: "content", createdBy: null, updatedBy: null},
      {id: 10, title: "Title blog 10", description: "description", content: "content", createdBy: null, updatedBy: null}
    ];

    let blog = {
      id: null,
      title: "",
      description: "",
      content: "",
      createdBy: null,
      updatedBy: null
    }

    const addBlog = () => {
      blog = {
        id: null,
        title: "",
        description: "",
        content: "",
        createdBy: null,
        updatedBy: null
      }
      getModal().open();
    }
    const deleteBlog = (item) => {
      alert("Are you sure you want to remove '"+item.title +"' now?");
    }
    const editBlog = (item) =>{
      getModal().open();
      blog = item;
    }
</script>
<table>
    <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th><button on:click={addBlog} class="btn-create">ADD NEW</button></th>
    </thead>
    <tbody>
    {#each listData as item}
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
                <button on:click={() => editBlog(item)} class="btn-edit">Edit</button>
                <button on:click={() => deleteBlog(item)} class="btn-delete">Delete</button>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<Modal>
    <EditBlog blog={blog}/>
</Modal>
<style>
    table{
        text-align: center;
        margin: 0 auto;
    }
</style>
