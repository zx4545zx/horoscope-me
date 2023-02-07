<script>
  export let data = {};
</script>

<div class="container mx-auto text-left pb-10">
  <div class="flex justify-center mb-5 w-auto">
    <div class="form-control w-full max-w-xs">
      <label class="label" for="current_date">
        <span class="label-text">วันที่: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="current_date"
        value={data.current_date}
      />

      <label class="label" for="compatibility">
        <span class="label-text">ราศีที่เข้ากันได้: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="compatibility"
        value={data.compatibility}
      />

      <label class="label" for="lucky_time">
        <span class="label-text">ช่วงเวลานำโชค: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="lucky_time"
        value={data.lucky_time}
      />

      <label class="label" for="lucky_number">
        <span class="label-text">เลขนำโชค: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="lucky_number"
        value={data.lucky_number}
      />

      <label class="label" for="color">
        <span class="label-text">สีนำโชค: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="color"
        value={data.color}
      />

      <label class="label" for="date_range">
        <span class="label-text">ช่วงระยะเวลา: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="date_range"
        value={data.date_range}
      />

      <label class="label" for="mood">
        <span class="label-text">อารมณ์ของวัน: </span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        disabled
        name="mood"
        value={data.mood}
      />

      <label class="label" for="description">
        <span class="label-text">คำอธิบาย: </span>
      </label>
      <textarea
        class="textarea textarea-bordered w-full max-w-xs"
        name="description"
        disabled
        rows="7"
      >
        {data.description}
      </textarea>
    </div>
  </div>
</div>
