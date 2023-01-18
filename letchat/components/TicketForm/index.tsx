const TicketForm = () => {
    
    return (
    
<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Property Number"/>
    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Subject"/>
    </div>
    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows={3}
      placeholder="Message"
    ></textarea>
    </div>
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-light-primary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-light-primary hover:shadow-lg hover:opacity-50
      focus:bg-light-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-light-primary active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
  </form>
</div>
    )


  };
  
  export default TicketForm;