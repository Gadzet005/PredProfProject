# Generated by Django 4.0.2 on 2022-02-18 15:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0003_alter_category_name'),
        ('MoneyControlApp', '0005_alter_operation_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='operation',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MainApp.category', verbose_name='Категория'),
        ),
    ]
