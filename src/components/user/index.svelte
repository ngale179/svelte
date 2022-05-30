<script>
    import Modal,{getModal} from '../modal.svelte';
    import EditUser from './edit.svelte';

    let listData = [
      {id: 1, lastName: "Jone 1", firstName: "Alex", sex: 1, age: 18, address: "Chicago"},
      {id: 2, lastName: "Jone 2", firstName: "Alex", sex: 1, age: 38, address: "Chicago"},
      {id: 3, lastName: "Jone 3", firstName: "Alex", sex: 0, age: 42, address: "Chicago"},
      {id: 4, lastName: "Jone 4", firstName: "Alex", sex: 0, age: 22, address: "Chicago"},
      {id: 5, lastName: "Jone 5", firstName: "Alex", sex: 1, age: 18, address: "Chicago"},
      {id: 6, lastName: "Jone 6", firstName: "Alex", sex: 1, age: 42, address: "Chicago"},
      {id: 7, lastName: "Jone 7", firstName: "Alex", sex: 0, age: 18, address: "Chicago"},
      {id: 8, lastName: "Jone 8", firstName: "Alex", sex: 1, age: 78, address: "Chicago"},
      {id: 9, lastName: "Jone 9", firstName: "Alex", sex: 0, age: 74, address: "Chicago"},
      {id: 10, lastName: "Jone 10", firstName: "Alex", sex: 1, age: 89, address: "Chicago"}
    ];

    let user = {
      id: null,
      firstName: "",
      lastName: "",
      sex: 0,
      age: 0,
      address: ""
    }

    const addUser = () => {
      user = {
        id: null,
        firstName: "",
        lastName: "",
        sex: 0,
        age: 0,
        address: ""
      }
      getModal().open();
    }
    const deleteUser = (item) => {
      alert("Are you sure you want to remove "+item.firstName +" "+item.lastName+" now?");
    }
    const editUser = (item) =>{
      getModal().open();
      user = item;
    }
</script>
<table>
    <thead>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Sex</th>
        <th>Address</th>
        <th><button on:click={addUser} class="btn-create">ADD NEW</button></th>
    </thead>
    <tbody>
    {#each listData as item}
        <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>
                {#if item.sex === 1}
                    Male
                {:else}
                    Female
                {/if}
            </td>
            <td>{item.address}</td>
            <td>
                <button on:click={() => editUser(item)} class="btn-edit">Edit</button>
                <button on:click={() => deleteUser(item)} class="btn-delete">Delete</button>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<Modal>
    <EditUser user={user}/>
</Modal>
<style>
    table{
        text-align: center;
        margin: 0 auto;
    }
</style>
