<template>
    <div class="form-view">
        <h2 class="form-title">Skicka in CV</h2>
        <div class="form">
        <div class="input-container">
            <p>För- och efternamn</p>
            <input class="input input-name" placeholder="Test Testsson" type="text" name="" id="">
        </div>
        <div class="input-container">
            <p>E-post</p>
            <input class="input input-mail" placeholder="test.testsson@gmail.com" type="text" name="" id="">
        </div>
        <div class="input-container">
            <p>Ladda upp ditt CV</p>
            <input class="input input-file" type="file" name="" id="">
        </div>
        <button class="btn-outlined send-btn">Skicka in</button>


        </div>
    </div>
</template>

<style scoped>

.form-view {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    width: 50%;
    background-color: var(--color-muted);
    color: var(--text-color);
    font-weight: var(--font-bold);
    flex-direction: column;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.09);

    background-image: url("/src/assets/bg_dark.JPG");
    background-size: cover;  
    background-position: center;
    background-repeat: no-repeat;

    padding: 20px;
}

.input-container {
    display: flex;
    width: 75%;
    padding: 10px;
    flex-direction: column;
    align-items: center;
}

.input-container p {
    font-size: var(--text-md);
    font-weight: var(--font-semibold);
    background-color: var(--color-primary);

    border-radius: 5px;
    padding: 5px 0 5px 10px ;
    width: 75%;
    text-align: left;

}

.input {
    margin: 10px;
    width: 75%;
}

.input-file {
    color: var(--text-secondary-color);
    background-color: white;
}

.form button {
    background-color: var(--text-color);
    color: var(--text-secondary-color);
    margin: 10px;
}

.form-title {
    background-color: var(--text-color);
    color: var(--text-secondary-color);
    border-radius: 5px;
    padding: 5px;
    margin: 20px;
    font-weight: var(--font-bold);
    font-size: var(--text-2xl);
}

.send-btn {
    width: 30%;
}

</style>