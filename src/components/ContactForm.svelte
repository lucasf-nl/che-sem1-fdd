<script>
    import ContactFormInput from "./ContactFormInput.svelte"

    // kan dit geen multiassignment zijn?
    // let subject, firstname, lastname, content;
    let subject = $state("");
    let firstname = $state("");
    let lastname = $state("");
    let content = $state("");

    function en(i) {
        return encodeURIComponent(i)
    }
</script>

<form class="grid grid-cols-2 grid-rows-2 w-full gap-2">
    <ContactFormInput cclass="col-span-2" type="text" id="subject" name="Onderwerp" required bind:value={subject} />
    <ContactFormInput type="text" id="firstname" name="Voornaam" required bind:value={firstname} />
    <ContactFormInput type="text" id="lastname" name="Achternaam" required bind:value={lastname} />
    <ContactFormInput cclass="col-span-2" type="textbox" id="content" name="Inhoud" required bind:value={content} />
    <button on:click={(e) => {
        e.preventDefault();
        console.log(">_<");
        console.log({ subject, firstname, lastname, content });
        window.open(
            // er bestaan inderdaad betere manieren om een URI op te stellen. maar daar is geen
            // shorthand syntax voor, dus dan krijg je dit :3
            // Voor- en achternaam worden als email headers toegevoegd. zou door een email client
            // kunnen worden gelezen. in de praktijk gebeurt dat nauwelijks, maar het gaat om het
            // principe.
            `mailto:lmfehres@student.che.nl?subject=${en(subject)}&body=${en(content)
            }&x-lmfehres-from-firstname=${en(firstname)}&x-lmfehres-from-lastname=${en(lastname)}`
        )
    }}>Verzenden</button>
</form>
