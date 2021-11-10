import React, { useState } from "react";
import "./GithubUsernameForm.css";

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

export default function GithubUsernameForm({
  onSubmitUsername,
}: GithubUsernameFormProps) {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onCgange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <form onSubmit={onSubmit} className='GithubUsernameForm'>
      <input
        onChange={onCgange}
        value={input}
        placeholder='Github 계정을 입력하시오.'
      />
      <button>조회</button>
    </form>
  );
}
