import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useBoardHook(id: string | undefined) {
  const [loading, setLoading] = useState(false);
  const [board, setBoard] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    if (!id) {
      navigate("/");
    } else {
      setTimeout(() => {
        setBoard({ id: id, name: "Board " + id });
        setLoading(false);
      }, 1000);
    }
  }, [id]);

  return {
    board,
    loading,
  };
}
