const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Для обработки данных формы
const fs = require('fs'); // Для работы с файлом
const app = express();
const PORT = 3000;

// Настроим статическую папку для обслуживания файлов HTML
app.use(express.static(path.join(__dirname)));

// Middleware для обработки данных формы
app.use(bodyParser.urlencoded({ extended: true }));

// Маршруты для загрузки файлов
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Main.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'News.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'Gallery.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Маршрут для обработки отправки формы
app.post('/submit', (req, res) => {
    const { name, phone, message } = req.body;

    // Формируем уникальную заявку
    const applicationId = Date.now();
    const formData = `ID: ${applicationId}\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}\n---\n`;

    // Сохраняем данные в файл forms.txt
    const filePath = path.join(__dirname, 'forms.txt');
    fs.appendFile(filePath, formData, (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            res.status(500).send('Ошибка сервера');
            return;
        }
        console.log('Заявка успешно сохранена');
        res.send('Заявка успешно отправлена!');
    });
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
