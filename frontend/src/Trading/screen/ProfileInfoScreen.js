import { FaArrowLeft } from "react-icons/fa";
import "./style/ProfileInfoScreen.css";

function ProfileInfoScreen() {
  return (
    <div class="grid grid-cols-4 gap-3">
      <div class="h-full">
        <div class="grid grid-rows-3 gap-5">
          <div className="noatanga-label2">NOATANGA</div>
          <div className="back-arrow">
            <button>
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>

      <div class="h-full col-start-2 col-span-2">
        <div class="grid grid-rows-3 gap-5">
          <div className="edit-profile-header">Edit your Profile</div>
          <div className="info">name</div>
          <div className="info">email</div>
        </div>
      </div>

      <div class="h-full">profile button</div>
    </div>
  );
}

export default ProfileInfoScreen;
