import React from "react";

const HowitWorks = () => {
  return (
    <div className="bg-white mx-2 pt-4 p-4">
      <div className="space-y-4">
        <h1 className="text-center text-[55px] font-bold">How it Works</h1>

        <div>
          <ul className="list-disc px-6 space-y-2 text-sm">
            <li>Download iShot-It App from Google Play or App Store</li>
            <li>
              Sign up with your Email, Username, Password and Upload your
              profile picture.
            </li>
            <li>
              Login to your email to verify by clicking on the URL sent to your
              email.
            </li>
            <li>Open iShot-it app and log in with your email and password.</li>
            <li>
              To snap a photo, tap the “Take Photo” icon at the bottom (You must
              permit the app to use your camera and location), position the
              camera, and then click “Tap to Snap” ones. To see your photo,
              click gallery.
            </li>
            <li>
              To record a video, tap the “Record Video” icon at the bottom,
              position the camera then click “Tap to Record”. To see your video,
              click gallery.
            </li>
            <li>
              How to Add Description to your photo/video: Click Gallery, select
              the photo or video you want to add a description to, click the
              “Pencil” icon on the photo or video, Type your description, and
              then Click Save.
            </li>
            <li>
              How to Share Photo or Video with Social Media Platforms: Click on
              Gallery, select the photo or video, click on the “Share” icon on
              the photo or video, and switch on the social media platform you
              want to share with, eg WhatsApp, click Share to chose the WhatsApp
              Account you want to share with and then post.
            </li>
            <li>
              To Delete a photo or video from the gallery, click and hold the
              photo or video to reveal the “Delete Media” dialog box. click
              delete to permanently delete from the gallery.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p>
            PLEASE NOTE: VIDEO RECORDING FOR FREE USERS IS 60 SECONDS. PREMIUM
            SUBSCRIBERS  WILL BE ABLE TO RECORD VIDEOS UP TO 10 MINUTES.
          </p>
          <p>Videos and Photos are securely stored in the cloud for privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
