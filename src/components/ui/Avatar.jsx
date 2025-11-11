import DefaultProfile from "../../assets/profile.webp";

export function Avatar({ src, className = "" }) {
  return (
    <img
      src={src || DefaultProfile}
      alt="profile"
      className={`w-[40px] h-[40px] rounded-full object-cover ${className}`}
    />
  );
}
