import { useEffect, useState } from "react";
import clientAxios from "../api/clientAxios";
import "../css/colors.css";

export default function ColorsAxion() {
  const [colors, setColors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    hex: "",
    description: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [editingColor, setEditingColor] = useState(null);

  const loadColors = async () => {
    try {
      const { data } = await clientAxios.get("/colors");
      setColors(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    loadColors();
  }, []);

  const handleSubmit = async (e) => {
    if (!form.name || !form.hex || !form.description) return;
    e.preventDefault();
    try {
      await clientAxios.post("/colors", form);
      setForm({ name: "", hex: "", description: "" });
      alert("Este color se acaba de crear exitosamente");
      loadColors();
    } catch (error) {
      alert(error.response?.data?.message || "Error al crear el color");
    }
  };

  const handleEdit = (color) => {
    setEditingColor(color);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    if (!editingColor.name || !editingColor.hex || !editingColor.description)
      return;

    try {
      await clientAxios.put(`/colors/${editingColor._id}`, editingColor);
      setShowModal(false);
      setEditingColor(null);
      loadColors();
    } catch (error) {
      alert(error.response?.data?.message || "Error al editar el color");
    }
  };

  const handleDelete = async (id, name) => {
    confirm(`¿Estas seguro que quieres eliminar el color: "${name}"?`);

    if (confirm) {
      try {
        await clientAxios.delete(`/colors/${id}`);
        loadColors();
      } catch (error) {
        alert(error.response?.data?.message || "Error al borrar el color");
      }
    }
  };

  return (
    <>
      <section className="form-container">
        <input
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          type="text"
          placeholder="Ingrese el nombre del color"
        />
        <input
          value={form.hex}
          onChange={(event) => setForm({ ...form, hex: event.target.value })}
          type="text"
          placeholder="Ingrese un color, por ejemplo #5900ffff"
        />
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: `${form.hex}`,
          }}
        ></div>
        <input
          value={form.description}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
          type="text"
          placeholder="Ingrese un color, por ejemplo #5900ffff"
        />

        <button onClick={handleSubmit}>Guardar</button>
      </section>
      <section className="colors_section">
        {colors.length > 0 ? (
          <>
            {colors.map((color) => {
              const { name, hex, description, _id } = color;
              return (
                <article className="colors">
                  <p>Vista previa del color</p>
                  <div
                    className="colors_preview"
                    style={{
                      backgroundColor: `${hex}`,
                    }}
                  ></div>
                  <p>{name}</p>
                  <p>Descripción: {description}</p>
                  <div className="colors_btns">
                    <button onClick={() => handleEdit(color)}>Editar</button>
                    <button onClick={() => handleDelete(_id, name)}>
                      Eliminar
                    </button>
                  </div>
                </article>
              );
            })}
          </>
        ) : (
          <>
            <p>No hay colores para mostrar</p>
          </>
        )}
      </section>

      {showModal && editingColor && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Editar Color</h3>

            <div className="form-container">
              <p>Vista previa del color</p>
              <div
                className="colors_preview"
                style={{
                  backgroundColor: `${editingColor.hex}`,
                }}
              ></div>

              <input
                placeholder="Nombre del color"
                value={editingColor.name}
                onChange={(e) =>
                  setEditingColor({ ...editingColor, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Ingrese un color, por ejemplo #facc00ff"
                value={editingColor.hex}
                onChange={(e) =>
                  setEditingColor({
                    ...editingColor,
                    hex: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Descripcion"
                value={editingColor.description}
                onChange={(e) =>
                  setEditingColor({
                    ...editingColor,
                    description: e.target.value,
                  })
                }
              />

              <div className="modal-actions">
                <button onClick={handleUpdate} className="btn-save">
                  Guardar Cambios
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setEditingColor(null);
                  }}
                  className="btn-cancel"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
