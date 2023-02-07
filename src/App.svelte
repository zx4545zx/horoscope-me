<script>
  import NavBar from "./lib/NavBar.svelte";
  import Display from "./lib/Display.svelte";
  import Notification from "./lib/Notification.svelte";
  import { getData } from "./utils/getData";

  let result = {};
  let sign = "";
  let day = "";

  let show = false;
  let notification = false;
  let loading = "";

  const handleClick = async () => {
    notification = false;
    if (sign != "" && day != "") {
      show = true;
      loading = "loading";
      result = getData(sign, day);
      loading = "";
    } else {
      notification = true;
    }
  };
</script>

<div class="h-screen">
  <NavBar />
  <main class="container mx-auto text-center px-5 mb-7">
    <div class="flex justify-center mb-5 w-auto">
      <select
        class="select select-secondary w-full max-w-xs"
        bind:value={sign}
        required
      >
        <option disabled selected value="">เลือกราศี</option>
        <option value="capricorn">มังกร</option>
        <option value="aquarius">กุมภ์</option>
        <option value="pisces">มีน</option>
        <option value="aries">เมษ</option>
        <option value="taurus">พฤษก</option>
        <option value="gemini">เมถุน</option>
        <option value="cancer">กรกฎ</option>
        <option value="leo">สิงห์</option>
        <option value="virgo">กันย์</option>
        <option value="libra">ตุลย์</option>
        <option value="scorpio">พิจิก</option>
        <option value="sagittarius">ธนู</option>
      </select>
    </div>

    <div class="flex justify-center mb-5 w-auto">
      <select
        class="select select-accent w-full max-w-xs"
        bind:value={day}
        required
      >
        <option disabled selected value="">เลือกวันดูดวง</option>
        <option value="today">วันนี้</option>
        <option value="tomorrow">พรุ่งนี้</option>
        <option value="yesterday">เมื่อวาน</option>
      </select>
    </div>

    <button
      type="submit"
      class="btn btn-primary px-10 mb-5 w-auto {loading}"
      on:click={handleClick}>ดูดวง</button
    >

    {#if show}
      {#await result}
        <p>กรุณารอซักครู่...</p>
        <progress class="progress w-56" />
      {:then data}
        <Display {data} />
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    {/if}

    {#if notification}
      <Notification />
    {/if}

    <div />
  </main>
</div>

<style>
</style>
